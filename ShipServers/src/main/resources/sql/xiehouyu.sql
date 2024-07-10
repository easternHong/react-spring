CREATE TABLE public.xiehouyu
(
    id  SERIAL PRIMARY KEY,
    riddle character varying(255) COLLATE pg_catalog."default" NOT NULL,
    answer character varying(255) COLLATE pg_catalog."default" NOT NULL
)