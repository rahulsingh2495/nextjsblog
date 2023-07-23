"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const session = useSession();
  console.log(session);
  return <div>DASHBOARD PAGE;</div>;
};

export default Dashboard;
