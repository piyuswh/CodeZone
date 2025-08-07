import React, { useEffect, useState } from 'react';
import '../Stylesheets/History.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
const backendUrl = import.meta.env.VITE_BACKEND_URL

const History = () => {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/Attempts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        setAttempts(data);
      });
  }, []);

  return (
    <div id="main" className="p-4 bg-[url('/images/240.jpg')] w-full min-h-screen bg-no-repeat bg-cover text-white">
      {
        attempts.length === 0 ?
          <h1 className="text-center">No Attempts Yet</h1>
          :
          <>
            <h1 className="text-center text-2xl font-semibold">Your Attempts</h1>
            <br />
            <div className="w-full overflow-x-auto bg-white/30 backdrop-blur-md rounded-xl p-6">
              <table className="text-center border border-gray-400 border-separate border-spacing-x-4 w-full min-w-[600px]">
                <thead>
                  <tr>
                    <th className="text-xl font-bold border border-gray-400 p-2 text-black">Sr.No</th>
                    <th className="text-xl font-bold border border-gray-400 p-2  text-black">Submitted At</th>
                    <th className="text-xl font-bold border border-gray-400 p-2  text-black">Status</th>
                    <th className="text-xl font-bold border border-gray-400 p-2  text-black">Code</th>
                  </tr>
                </thead>
                <tbody>
                  {[...attempts].reverse().map((val, ind) => (
                    <tr key={val._id}>
                      <td className="text-base border border-gray-300 p-2">{ind + 1}</td>
                      <td className="text-base border border-gray-300 p-2">
                        {moment(val.submittedAt).format('DD-MM-YYYY hh:mm A')}
                      </td>
                      <td className="text-base border border-gray-300 p-2">{val.status}</td>
                      <td className="text-base border border-gray-300 p-2">
                        <Link to={`/codezone/${val._id}`} className="text-blue-500 underline">Code</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
      }
    </div>
  );
};

export default History;
