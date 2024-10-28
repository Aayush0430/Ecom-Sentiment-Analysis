"use client";
import Card from "@/components/Card";
import axios from "axios";
import { useState } from "react";
import { products } from "../products/products.js";
import { Button } from "@mui/material";
import SideMenu from "@/components/SideMenu";
import Header from "@/components/Header";
export default function Home() {
  const [sentence, setSentence] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);
  // async function handleSubmit(e: any) {
  //   e.preventDefault();
  //   setLoading(true);
  //   const { data } = await axios.post("http://localhost:8001/calcsentiment", {
  //     sentence: sentence,
  //   });
  //   setSentiment(data.sentiment);
  //   setLoading(false);
  // }
  return (
    <>
      <Header />
    </>
  );
}
