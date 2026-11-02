CREATE TABLE `product_reviews` (
	`id` text PRIMARY KEY NOT NULL,
	`product_slug` text NOT NULL,
	`author_id` text NOT NULL,
	`name` text NOT NULL,
	`role` text NOT NULL,
	`rating` integer NOT NULL,
	`body` text NOT NULL,
	`status` text NOT NULL,
	`purchase_verified` integer DEFAULT 0 NOT NULL,
	`media` text DEFAULT '[]' NOT NULL,
	`version` integer DEFAULT 1 NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	`deleted_at` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `reviews_product_author` ON `product_reviews` (`product_slug`,`author_id`);--> statement-breakpoint
CREATE INDEX `reviews_product_status` ON `product_reviews` (`product_slug`,`status`);