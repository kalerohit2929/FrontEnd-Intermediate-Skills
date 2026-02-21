import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        // Generate extra fake users for more realistic dashboard
        const extraUsers = [];
        const cities = ["New York", "London", "Paris", "Tokyo", "Berlin"];
        const companies = ["TechCorp", "BizInc", "WebSolutions", "AlphaCo", "DevWorks"];

        for (let i = 0; i < 50; i++) {
          const randomUser = data[Math.floor(Math.random() * data.length)];
          extraUsers.push({
            ...randomUser,
            id: data.length + i + 1,
            name: randomUser.name + " " + (i + 1),
            email: randomUser.email.split("@")[0] + i + "@example.com",
            address: {
              ...randomUser.address,
              city: cities[Math.floor(Math.random() * cities.length)],
            },
            company: {
              ...randomUser.company,
              name: companies[Math.floor(Math.random() * companies.length)],
            },
          });
        }

        setUsers([...data, ...extraUsers]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
  }

  // Prepare chart data: users per city
  const cityData = Object.values(
    users.reduce((acc, user) => {
      if (!acc[user.address.city]) {
        acc[user.address.city] = { city: user.address.city, count: 0 };
      }
      acc[user.address.city].count += 1;
      return acc;
    }, {})
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Total Users</p>
          <p className="text-2xl font-bold">{users.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Cities</p>
          <p className="text-2xl font-bold">{new Set(users.map(u => u.address.city)).size}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Companies</p>
          <p className="text-2xl font-bold">{new Set(users.map(u => u.company.name)).size}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Users per City</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cityData}>
            <XAxis dataKey="city" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">City</th>
              <th className="px-4 py-2 text-left">Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.address.city}</td>
                <td className="px-4 py-2">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
