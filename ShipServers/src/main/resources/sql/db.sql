CREATE TABLE public.books
(
    id  SERIAL PRIMARY KEY,
    title character varying(255) COLLATE pg_catalog."default" NOT NULL,
    batchno character varying(255) COLLATE pg_catalog."default" NOT NULL,
    price double precision,
    noofproduct int
)