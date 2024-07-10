CREATE TABLE IF NOT EXISTS "idioms" (
	"id" serial PRIMARY KEY NOT NULL,
	"derivation" varchar(255),
	"example" varchar(255) NOT NULL,
	"explanation" varchar(255),
	"pinyin" varchar(255),
	"word" varchar(255),
	"abbreviation" varchar(255)
);
