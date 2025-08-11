import { Request, Response } from "express";
import dotenv from "dotenv";
import { AirtableRecordInput } from "../types/recordType";

const axios = require("axios");

dotenv.config();

async function CreateRecord(
  req: Request<{}, {}, AirtableRecordInput>,
  res: Response
): Promise<void> {
  console.log("create record func");
  const url = `https://api.airtable.com/v0/${process.env.BASE_ID}/${process.env.TABLE_ID}`;
  try {
    const { fullName, email, message } = req.body;

    if (!fullName) {
      res.status(400).json({ error: "Full name must be included" });
      return;
    }

    if (!email) {
      res.status(400).json({ error: "Email must be included" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: "Invalid email format" });
      return;
    }

    if (!message) {
      res.status(400).json({ error: "Message must be included" });
      return;
    }

    const payload = {
      records: [
        {
          fields: {
            "Full Name": fullName,
            Email: email,
            Message: message,
          },
        },
      ],
    };

    const createdRecord = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    res.status(201).json({
      message: "Record created successfully",
      record: createdRecord.data,
    });
  } catch (error: any) {
    console.log("error:", error.message);

    res.status(500).json({
      error: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
    console.log(error.message);
  }
}

export { CreateRecord };
