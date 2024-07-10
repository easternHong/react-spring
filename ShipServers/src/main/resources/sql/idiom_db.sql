CREATE TABLE public.idioms
(
    id  SERIAL PRIMARY KEY,
    derivation character varying(255) COLLATE pg_catalog."default" NOT NULL,
    example character varying(255) COLLATE pg_catalog."default" NOT NULL,
    explanation character varying(255) COLLATE pg_catalog."default" NOT NULL,
    pinyin character varying(255) COLLATE pg_catalog."default" NOT NULL,
    word character varying(255) COLLATE pg_catalog."default" NOT NULL,
    abbreviation character varying(255) COLLATE pg_catalog."default" NOT NULL
)