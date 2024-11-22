import express, { Application } from "express";
import cors from "cors";

const initializeApp = (app: Application): void => {
  app.use(cors());
  app.use(express.json());
};

export default initializeApp;
