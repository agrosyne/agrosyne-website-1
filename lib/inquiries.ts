import clientPromise from "@/lib/mongodb";

export type InquiryStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "quoted"
  | "negotiating"
  | "won"
  | "lost";

export interface Inquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  status: InquiryStatus;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

const DATABASE_NAME = "agrosyne";

const COLLECTION_NAME = "inquiries";

export async function getInquiries() {
  const client = await clientPromise;

  const db = client.db(DATABASE_NAME);

  const inquiries = await db
    .collection(COLLECTION_NAME)
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return inquiries;
}

export async function createInquiry(
  data: Omit<
    Inquiry,
    "id" | "status" | "notes" | "createdAt" | "updatedAt"
  >
) {
  const client = await clientPromise;

  const db = client.db(DATABASE_NAME);

  const now = new Date().toISOString();

  const inquiry: Inquiry = {
    ...data,
    id: crypto.randomUUID(),
    status: "new",
    notes: "",
    createdAt: now,
    updatedAt: now,
  };

  await db.collection(COLLECTION_NAME).insertOne(inquiry);

  return inquiry;
}

export async function updateInquiry(
  id: string,
  updates: {
    status?: InquiryStatus;
    notes?: string;
  }
) {
  const client = await clientPromise;

  const db = client.db(DATABASE_NAME);

  const updateData = {
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  const result = await db
    .collection(COLLECTION_NAME)
    .updateOne(
      { id },
      {
        $set: updateData,
      }
    );

  if (result.matchedCount === 0) {
    return null;
  }

  const updatedInquiry = await db
    .collection(COLLECTION_NAME)
    .findOne({ id });

  return updatedInquiry;
}