"use client";
import { data } from "../app/data/page";
import { Pagination } from "./Pagination";
import { useState, Dispatch, SetStateAction } from "react";
type DataItem = {
  date: string;
  time: string;
  reportName: string;
  downloadLink: string;
};

type TableProps = {
  data: DataItem[];
  currentPage: number;
  itemsPerPage: number;
};

type PageNumber = number;
type SetPageNumber = Dispatch<SetStateAction<PageNumber>>;

const Table: React.FC<TableProps> = ({ data, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  return (
    <table className="w-full border-collapse text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Report Name</th>
          <th className="px-4 py-2">Download</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((item, index) => (
          <tr key={index}>
            <td className="px-4 py-2 border-b border-gray-300">
              {item.date} {item.time}
            </td>
            <td className="px-4 py-2 border-b border-gray-300">
              {item.reportName}
            </td>
            <td className="px-4 py-2 border-b border-gray-300">
              <a
                href={item.downloadLink}
                className="text-blue-500 hover:underline"
              >
                Download
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Hero() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage]: [PageNumber, SetPageNumber] =
    useState(1);
  return (
    <div className="p-4">
      <Table
        data={data}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
