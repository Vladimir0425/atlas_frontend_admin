import { useEffect, useState } from "react";

import { ReusableTable } from "../../components/common";

import { HttpService } from "../../services";

export function Admissions() {
  const [rowsData, setRowsData] = useState([]);
  const columns = [
    {
      title: "Student name",
      name: "student_name",
    },
    {
      title: "Parent name",
      name: "parent_name",
    },
    {
      title: "Date of birth",
      name: "birth_date",
    },
    {
      title: "Grade level 2023-2024",
      name: "grade_level",
    },
    {
      title: "Email",
      name: "email",
    },
    {
      title: "Phone Number",
      name: "phone_number",
    },
    {
      title: "Zipcode",
      name: "zipcode",
    },
    {
      title: "About student",
      name: "about",
    },
    {
      title: "Supply Fee",
      name: "fee_type",
    },
  ];

  useEffect(() => {
    HttpService.get("/admission").then((res) => {
      const data = res.data.map((item) => ({
        ...item,
        student_name: `${item.student_last_name} ${item.student_first_name}`,
        parent_name: `${item.parent_last_name} ${item.parent_first_name}`,
      }));
      setRowsData(data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Admissions</h1>
      <ReusableTable columns={columns} rows={rowsData} />
    </div>
  );
}
