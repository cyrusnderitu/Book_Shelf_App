import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://hapi-books.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a3838e30a2msh142b89bd78f6362p18581ajsn3dc9f2872496",
    "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  },
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const url = `${BASE_URL}/nominees/romance/2020`;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
});

export const fetchBookById = createAsyncThunk(
  "book/fetchBookId",
  async (id: string) => {
    const url = `${BASE_URL}/book/${id}`;
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }
);
