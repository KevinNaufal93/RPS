PGDMP                     
    y            rps    14.0    14.0                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16421    rps    DATABASE     g   CREATE DATABASE rps WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE rps;
                postgres    false            �            1259    16423    usergame    TABLE     �   CREATE TABLE public.usergame (
    usergameid integer NOT NULL,
    username character varying(255),
    useremail character varying(255),
    userpassword character varying(255),
    usergamerole "char"
);
    DROP TABLE public.usergame;
       public         heap    postgres    false            �            1259    16422    usergame_usergameid_seq    SEQUENCE     �   CREATE SEQUENCE public.usergame_usergameid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usergame_usergameid_seq;
       public          postgres    false    210                       0    0    usergame_usergameid_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.usergame_usergameid_seq OWNED BY public.usergame.usergameid;
          public          postgres    false    209            �            1259    16432    usergamebiodata    TABLE     �   CREATE TABLE public.usergamebiodata (
    userid integer NOT NULL,
    username character varying(255),
    fullname character varying(255),
    age integer
);
 #   DROP TABLE public.usergamebiodata;
       public         heap    postgres    false            �            1259    16431    usergamebiodata_userid_seq    SEQUENCE     �   CREATE SEQUENCE public.usergamebiodata_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.usergamebiodata_userid_seq;
       public          postgres    false    212                       0    0    usergamebiodata_userid_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.usergamebiodata_userid_seq OWNED BY public.usergamebiodata.userid;
          public          postgres    false    211            �            1259    16441    usergamehistory    TABLE     �   CREATE TABLE public.usergamehistory (
    historyid integer NOT NULL,
    userid integer,
    timesplayed integer,
    timeswon integer,
    timeslost integer
);
 #   DROP TABLE public.usergamehistory;
       public         heap    postgres    false            �            1259    16440    usergamehistory_historyid_seq    SEQUENCE     �   CREATE SEQUENCE public.usergamehistory_historyid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.usergamehistory_historyid_seq;
       public          postgres    false    214                       0    0    usergamehistory_historyid_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.usergamehistory_historyid_seq OWNED BY public.usergamehistory.historyid;
          public          postgres    false    213            f           2604    16426    usergame usergameid    DEFAULT     z   ALTER TABLE ONLY public.usergame ALTER COLUMN usergameid SET DEFAULT nextval('public.usergame_usergameid_seq'::regclass);
 B   ALTER TABLE public.usergame ALTER COLUMN usergameid DROP DEFAULT;
       public          postgres    false    210    209    210            g           2604    16435    usergamebiodata userid    DEFAULT     �   ALTER TABLE ONLY public.usergamebiodata ALTER COLUMN userid SET DEFAULT nextval('public.usergamebiodata_userid_seq'::regclass);
 E   ALTER TABLE public.usergamebiodata ALTER COLUMN userid DROP DEFAULT;
       public          postgres    false    212    211    212            h           2604    16444    usergamehistory historyid    DEFAULT     �   ALTER TABLE ONLY public.usergamehistory ALTER COLUMN historyid SET DEFAULT nextval('public.usergamehistory_historyid_seq'::regclass);
 H   ALTER TABLE public.usergamehistory ALTER COLUMN historyid DROP DEFAULT;
       public          postgres    false    214    213    214            �          0    16423    usergame 
   TABLE DATA           _   COPY public.usergame (usergameid, username, useremail, userpassword, usergamerole) FROM stdin;
    public          postgres    false    210   �       �          0    16432    usergamebiodata 
   TABLE DATA           J   COPY public.usergamebiodata (userid, username, fullname, age) FROM stdin;
    public          postgres    false    212   S       �          0    16441    usergamehistory 
   TABLE DATA           ^   COPY public.usergamehistory (historyid, userid, timesplayed, timeswon, timeslost) FROM stdin;
    public          postgres    false    214   p       	           0    0    usergame_usergameid_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.usergame_usergameid_seq', 18, true);
          public          postgres    false    209            
           0    0    usergamebiodata_userid_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.usergamebiodata_userid_seq', 1, false);
          public          postgres    false    211                       0    0    usergamehistory_historyid_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.usergamehistory_historyid_seq', 1, false);
          public          postgres    false    213            j           2606    16430    usergame usergame_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.usergame
    ADD CONSTRAINT usergame_pkey PRIMARY KEY (usergameid);
 @   ALTER TABLE ONLY public.usergame DROP CONSTRAINT usergame_pkey;
       public            postgres    false    210            l           2606    16439 $   usergamebiodata usergamebiodata_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.usergamebiodata
    ADD CONSTRAINT usergamebiodata_pkey PRIMARY KEY (userid);
 N   ALTER TABLE ONLY public.usergamebiodata DROP CONSTRAINT usergamebiodata_pkey;
       public            postgres    false    212            n           2606    16446 $   usergamehistory usergamehistory_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.usergamehistory
    ADD CONSTRAINT usergamehistory_pkey PRIMARY KEY (historyid);
 N   ALTER TABLE ONLY public.usergamehistory DROP CONSTRAINT usergamehistory_pkey;
       public            postgres    false    214            �   Q   x�34�t-*O��t*J���w�/-�����K���44261���2��N-�M,JO-J��K,MK���N-��3�P������� �O      �      x������ � �      �      x������ � �     