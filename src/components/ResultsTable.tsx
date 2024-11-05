import React from 'react';
import { SearchResult } from '../types';

interface ResultsTableProps {
  results: SearchResult[];
}

export const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
  if (results.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="w-full text-right">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 border-b text-[#8A1538]">القطاع</th>
            <th className="px-4 py-3 border-b text-[#8A1538]">القسم</th>
            <th className="px-4 py-3 border-b text-[#8A1538]">المجموعة</th>
            <th className="px-4 py-3 border-b text-[#8A1538]">الفئة</th>
            <th className="px-4 py-3 border-b text-[#8A1538]">الفرع</th>
            <th className="px-4 py-3 border-b text-[#8A1538]">النشاط</th>
            <th className="px-4 py-3 border-b text-[#8A1538]">النتيجة</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-3 border-b">{result.chapter_ar}</td>
              <td className="px-4 py-3 border-b">{result.department_ar}</td>
              <td className="px-4 py-3 border-b">{result.group_ar}</td>
              <td className="px-4 py-3 border-b">{result.category_ar}</td>
              <td className="px-4 py-3 border-b">{result.branch_ar}</td>
              <td className="px-4 py-3 border-b">{result.activity_ar}</td>
              <td className="px-4 py-3 border-b">{(result.score * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};