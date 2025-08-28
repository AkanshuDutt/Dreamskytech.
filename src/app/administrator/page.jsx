"use client";

import { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Swal from "sweetalert2";

export default function AdminPage() {
  const [tab, setTab] = useState("enquiry");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  // Filters
  const [filterRead, setFilterRead] = useState("all"); // all, read, unread
  const [filterSubject, setFilterSubject] = useState("");
  const [filterName, setFilterName] = useState("");
  const [filterDate, setFilterDate] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (tab === "job") {
          setUsers([]);
          return;
        }

        const res = await fetch("/api/users");
        if (!res.ok) throw new Error("API error");
        const data = await res.json();

        const updatedUsers = (data.users || []).map(u => ({ ...u, read: u.read || false }));
        setUsers(updatedUsers);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };
    fetchUsers();
  }, [tab]);

  const handleSelectUser = (user) => {
    if (!user.read) {
      setUsers(prev => prev.map(u => u.id === user.id ? { ...u, read: true } : u));
      user.read = true;
    }
    setSelectedUser(user);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action will permanently delete the enquiry. Do you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
        if (res.ok) {
          setUsers(users.filter((u) => u.id !== id));
          setSelectedUser(null);
          Swal.fire("Deleted!", "The enquiry has been deleted.", "success");
        } else {
          const errorText = await res.text();
          Swal.fire("Error", `Failed to delete user. ${errorText || "Please try again."}`, "error");
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "An error occurred while deleting the user. Please try again later.", "error");
      }
    }
  };

  // Apply filters
  const filteredUsers = users.filter(u => {
    if (filterRead === "read" && !u.read) return false;
    if (filterRead === "unread" && u.read) return false;
    if (filterSubject && !u.subject.toLowerCase().includes(filterSubject.toLowerCase())) return false;
    if (filterName && !u.name.toLowerCase().includes(filterName.toLowerCase())) return false;
    if (filterDate && new Date(u.createdAt).toISOString().slice(0, 10) !== filterDate) return false;
    return true;
  });

  // Export to Excel
  const exportToExcel = (data) => {
    if (!data || data.length === 0) return;

    const wsData = data.map(u => ({
      ID: u.id,
      Name: u.name,
      Email: u.email,
      Subject: u.subject,
      Message: u.message,
      Read: u.read ? "Yes" : "No",
      CreatedAt: new Date(u.createdAt).toLocaleString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(wsData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "enquiries.xlsx");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <button
          className={`mb-3 p-3 text-left rounded hover:bg-gray-800 transition ${tab === "enquiry" ? "bg-gray-800" : ""}`}
          onClick={() => { setTab("enquiry"); setSelectedUser(null); }}
        >
          Enquiries
        </button>
        <button
          className={`mb-3 p-3 text-left rounded hover:bg-gray-800 transition ${tab === "job" ? "bg-gray-800" : ""}`}
          onClick={() => { setTab("job"); setSelectedUser(null); }}
        >
          Job Enquiries
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex relative">
        {/* Users List */}
        <div className="w-1/3 border-r border-gray-300 pr-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">{tab === "enquiry" ? "Enquiries" : "Job Enquiries"}</h1>
            {tab === "enquiry" && (
              <button 
                className="p-2 rounded hover:bg-gray-200 transition"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <FiFilter size={22} />
              </button>
            )}
          </div>

          {/* Search bar for name */}
          {tab === "enquiry" && (
            <input
              type="text"
              placeholder="Search by contact name..."
              className="w-full mb-3 p-2 border rounded"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
          )}

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {filteredUsers.length === 0 ? (
            <p className="text-gray-500">{tab === "job" ? "No job enquiries yet." : "No enquiries available."}</p>
          ) : (
            <ul>
              {filteredUsers.map(u => (
                <li 
                  key={u.id} 
                  className={`p-3 border-b cursor-pointer hover:bg-gray-100 rounded ${u.read ? "bg-gray-50" : "bg-white"}`}
                  onClick={() => handleSelectUser(u)}
                >
                  <p className="font-bold">{u.subject}</p>
                  <p className="text-sm text-gray-600">{u.name}</p>
                  <p className="text-xs text-gray-400">{new Date(u.createdAt).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* User Details */}
        <div className="flex-1 p-4">
          {selectedUser ? (
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">{selectedUser.name}</h2>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Subject:</strong> {selectedUser.subject}</p>
              <p><strong>Message:</strong> {selectedUser.message}</p>
              <p className="text-gray-500 mt-2">{new Date(selectedUser.createdAt).toLocaleString()}</p>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={() => handleDelete(selectedUser.id)}
              >
                Delete
              </button>
            </div>
          ) : (
            <p className="text-gray-500 mt-4">
              {tab === "job" ? "No job enquiry selected." : "Select an enquiry to see details."}
            </p>
          )}
        </div>

        {/* Filter Panel */}
        {filterOpen && (
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-4 transition">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="mb-3">
              <label className="block font-semibold mb-1">Read Status</label>
              <select
                className="w-full p-2 border rounded"
                value={filterRead}
                onChange={(e) => setFilterRead(e.target.value)}
              >
                <option value="all">All</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="block font-semibold mb-1">Subject</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Search by subject"
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="block font-semibold mb-1">Contact Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Search by name"
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="block font-semibold mb-1">Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
              />
            </div>

            {/* Export to Excel Button */}
            <button
              className="mt-2 w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
              onClick={() => exportToExcel(filteredUsers)}
            >
              Download Excel
            </button>

            <button
              className="mt-2 w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-700 transition"
              onClick={() => setFilterOpen(false)}
            >
              Close Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}