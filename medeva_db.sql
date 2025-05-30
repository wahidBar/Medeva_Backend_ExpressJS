PGDMP                      }         	   medeva_db    12.20    16.4     &           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            '           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            (           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            )           1262    54435 	   medeva_db    DATABASE     �   CREATE DATABASE medeva_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE medeva_db;
                postgres    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            *           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    6            �           1247    54819    enum_Employees_gender    TYPE     Y   CREATE TYPE public."enum_Employees_gender" AS ENUM (
    'Laki-laki',
    'Perempuan'
);
 *   DROP TYPE public."enum_Employees_gender";
       public          postgres    false    6            �           1247    54824    enum_Employees_status    TYPE     W   CREATE TYPE public."enum_Employees_status" AS ENUM (
    'Active',
    'Non-Active'
);
 *   DROP TYPE public."enum_Employees_status";
       public          postgres    false    6            �            1259    54757    Roles    TABLE     �   CREATE TABLE public."Roles" (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public."Roles";
       public         heap    postgres    false    6            �            1259    54755    Roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Roles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Roles_id_seq";
       public          postgres    false    6    206            +           0    0    Roles_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Roles_id_seq" OWNED BY public."Roles".id;
          public          postgres    false    205            �            1259    54611    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false    6            �            1259    54763    employee_roles    TABLE     �   CREATE TABLE public.employee_roles (
    employee_id integer NOT NULL,
    role_id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);
 "   DROP TABLE public.employee_roles;
       public         heap    postgres    false    6            �            1259    54709 	   employees    TABLE     �  CREATE TABLE public.employees (
    id integer NOT NULL,
    full_name character varying(255),
    nik character varying(255),
    gender character varying(255),
    birth_place character varying(255),
    birth_date timestamp with time zone,
    phone character varying(255),
    province character varying(255),
    city character varying(255),
    district character varying(255),
    subdistrict character varying(255),
    address text,
    username character varying(255),
    email character varying(255),
    password character varying(255),
    type character varying(255),
    contract_start timestamp with time zone,
    contract_end timestamp with time zone,
    marital_status character varying(255),
    bpjs_code character varying(255),
    status character varying(255),
    photo character varying(255),
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.employees;
       public         heap    postgres    false    6            �            1259    54707    employees_id_seq    SEQUENCE     �   CREATE SEQUENCE public.employees_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.employees_id_seq;
       public          postgres    false    204    6            ,           0    0    employees_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.employees_id_seq OWNED BY public.employees.id;
          public          postgres    false    203            �
           2604    54760    Roles id    DEFAULT     h   ALTER TABLE ONLY public."Roles" ALTER COLUMN id SET DEFAULT nextval('public."Roles_id_seq"'::regclass);
 9   ALTER TABLE public."Roles" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    205    206            �
           2604    54712    employees id    DEFAULT     l   ALTER TABLE ONLY public.employees ALTER COLUMN id SET DEFAULT nextval('public.employees_id_seq'::regclass);
 ;   ALTER TABLE public.employees ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    203    204            "          0    54757    Roles 
   TABLE DATA           E   COPY public."Roles" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    206   /$                 0    54611    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    202   �$       #          0    54763    employee_roles 
   TABLE DATA           X   COPY public.employee_roles (employee_id, role_id, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    207   %                  0    54709 	   employees 
   TABLE DATA             COPY public.employees (id, full_name, nik, gender, birth_place, birth_date, phone, province, city, district, subdistrict, address, username, email, password, type, contract_start, contract_end, marital_status, bpjs_code, status, photo, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    204   �%       -           0    0    Roles_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Roles_id_seq"', 5, true);
          public          postgres    false    205            .           0    0    employees_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.employees_id_seq', 13, true);
          public          postgres    false    203            �
           2606    54762    Roles Roles_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Roles" DROP CONSTRAINT "Roles_pkey";
       public            postgres    false    206            �
           2606    54615     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    202            �
           2606    54767 "   employee_roles employee_roles_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.employee_roles
    ADD CONSTRAINT employee_roles_pkey PRIMARY KEY (employee_id, role_id);
 L   ALTER TABLE ONLY public.employee_roles DROP CONSTRAINT employee_roles_pkey;
       public            postgres    false    207    207            �
           2606    54717    employees employees_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.employees DROP CONSTRAINT employees_pkey;
       public            postgres    false    204            �
           2606    54768 .   employee_roles employee_roles_employee_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.employee_roles
    ADD CONSTRAINT employee_roles_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES public.employees(id) ON DELETE CASCADE;
 X   ALTER TABLE ONLY public.employee_roles DROP CONSTRAINT employee_roles_employee_id_fkey;
       public          postgres    false    207    2713    204            �
           2606    54773 *   employee_roles employee_roles_role_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.employee_roles
    ADD CONSTRAINT employee_roles_role_id_fkey FOREIGN KEY (role_id) REFERENCES public."Roles"(id) ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.employee_roles DROP CONSTRAINT employee_roles_role_id_fkey;
       public          postgres    false    207    206    2715            "   v   x�3�tL����4202�50�5�P0��20�20�31��60�#�e�\���F�ncN�ļ���"2��p�e�%�%���ߔ3(�8��83?/��L3�8R��K��o�钟]Bv��qqq �9\�         >   x�32025052742 ���ĒT��܂����T��b.#�
C$E�9h�FX�Õ��qqq l�      #   �   x���1
1��:9���H�E��,{�sl�8!���a.�D醴�Oo�����!UFA�Z��"[�.Ù�A�[YNS�	��s�D_��i�8�����)�$�c�+���(�����%e���1��0$�=-)i���R���"�C          c  x���]s�8���_��v��ѷ|��4iPR���NoP�`l��I��{�G�	�L��1#YGG������|���Un�WZP �I)�d�K�\�.'\>�%6��!�D@uL)>QM��F+)8J��n��[��rd���p�����)0T�ueMFE��I/���nӼU��|�(��avFn�h�K��斫�G�bI:�u�u���5�6O�����j哇9�.��zw�|�<SM����7~�����\N�iNeR�'j�����Ӆ��4yx9��GO@#(5J��-�h��6q�Z2d&�6��D
�~��蘛XĬ©��5�n��J�%c����[�a�I��a)�1�a`4.DO����H���>V8Ԑu��CĿ�^� '��o?$AR/�,͊]b��նݓx� ����M!ٛ�#[*�M�U�O�Ѧ\��]:�����~�	a&��k�5%_��3�S2�jw}V/�#�'�x�S�����㈐�T��[T��b�8��S�H0��Bz�,&Fg\H����9�x��#*���x^�+������m5�ԓ�\����i�i�?��q�W�W���f��'i>��^@Z���q�`N1<�Cl�� b�Šw��OhZu��	�p�
YRkQ���ѹ�~��i��!�(R��t�[���Jy��ꀥ�1��˭UI2����vQ�׸ �sHVh�O�ڛ�>cV��p�����&8��>%U,y��<8�#�y�A1��a]��,��8(�4��U-}�W?r*��_F�s���q��f��ݿ�/�Fٿ�%}ƗX�᧾�$�'Q�� Zq%%<����$bΑB$��p6b��/�����$g     