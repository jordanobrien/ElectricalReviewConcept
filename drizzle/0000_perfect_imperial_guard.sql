CREATE TABLE `media_pack_leads` (
	`id` text PRIMARY KEY NOT NULL,
	`full_name` text NOT NULL,
	`business_email` text NOT NULL,
	`company_name` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_media_pack_leads_email_company` ON `media_pack_leads` (`business_email`,`company_name`);