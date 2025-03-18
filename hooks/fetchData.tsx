import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://hapi-books.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d1989988bbmsh0e48376f1defd11p14bb28jsn02f192ef5ac2",
    "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  },
};

export const fetchBooks = createAsyncThunk("data/fetchData", async () => {
  const url = `${BASE_URL}/nominees/romance/2020`;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
});

export const fetchBookById = createAsyncThunk(
  "book/fetchBookId",
  async (id: number) => {
    const url = `${BASE_URL}/book/${id}`;
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }
);
