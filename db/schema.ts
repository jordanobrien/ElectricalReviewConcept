import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const mediaPackLeads = sqliteTable(
  "media_pack_leads",
  {
    id: text("id").primaryKey(),
    fullName: text("full_name").notNull(),
    businessEmail: text("business_email").notNull(),
    companyName: text("company_name").notNull(),
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  },
  (table) => [
    uniqueIndex("idx_media_pack_leads_email_company").on(table.businessEmail, table.companyName),
  ],
);
