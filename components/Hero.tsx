"use client";

import { data } from "../app/Data";
import { Pagination } from "./Pagination";
import { useState, Dispatch, SetStateAction } from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";
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
    <div className="min-h-[60vh]">
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
              <td className="px-4 py-2 my-3 flex flex-col ">
                <span className="block text-grey-300 text-md font-medium mr-2">
                  {item.date}
                </span>
                <span className="block text-sm">{item.time}</span>
              </td>
              <td className="px-4 py-2">{item.reportName}</td>
              <td className="px-4 py-2">
                <a
                  href="https://1drv.ms/x/s!AtUkWZ1nf4H3kBTsGW8BrtWMMEQF?e=SPlqeJ"
                  className="text-grey-100 hover:underline"
                >
                  <HiOutlineDocumentDownload
                    className="h-8 w-8"
                    color="grey-100"
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Hero() {
  const [itemsPerPage, setItemsPerPage]: [PageNumber, SetPageNumber] =
    useState(5);
  const [currentPage, setCurrentPage]: [PageNumber, SetPageNumber] =
    useState(1);
  return (
    <div className="py-10">
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
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  );
}
