create table if not exists public.product_reviews (
 id text primary key, product_slug text not null, author_id text not null,
 name text not null, role text not null, rating integer not null check(rating between 1 and 5),
 body text not null, status text not null check(status in ('pending','published')),
 purchase_verified integer not null default 0, media text not null default '[]',
 version integer not null default 1, created_at text not null, updated_at text not null, deleted_at text,
 unique(product_slug,author_id)
);
alter table public.product_reviews enable row level security;
revoke all on public.product_reviews from anon, authenticated;
grant all on public.product_reviews to service_role;
create index if not exists product_reviews_product_status on public.product_reviews(product_slug,status);
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('review-media','review-media',false,3145728,array['image/jpeg','image/png','image/webp','video/mp4','video/webm'])
on conflict(id) do update set public=false,file_size_limit=3145728;
