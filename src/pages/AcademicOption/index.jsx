import { useState, useEffect } from "react";

import { HttpService } from "../../services";
import { ReusableTable } from "../../components";

export function AcademicOptions() {
  const [rowsData, setRowsData] = useState([]);
  const columns = [
    {
      title: "Email",
      name: "email",
    },
    {
      title: "Like Choice",
      name: "likeItem",
    },
    {
      title: "Distinction",
      name: "distinction",
    },
    {
      title: "Dislike Choice",
      name: "dislikeItem",
    },
  ];

  useEffect(() => {
    HttpService.get("/isright").then((res) => {
      const data = res.data;
      setRowsData(data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Academic New Options</h1>
      <ReusableTable columns={columns} rows={rowsData} />
    </div>
  );
}
