# projekatDMV
Ova aplikacija omogućava registrovanim korisnicima da upravljaju uređajima kojima imaju pristup. Svaki uređaj može pripadati više korisnika, a korisnik može imati više uređaja. Implementirana je tabela uređaja, dodavanje, izmena, brisanje, grafikon baterije za 24h i izvoz podataka u CSV.

## Tehnologije

- **Backend**: Laravel 10
- **Frontend**: React + Inertia.js
- **Stil**: Tailwind CSS
- **Baza**: MySQL
- **Autentikacija**: Laravel Breeze + Inertia

## Instalacija i pokretanje

## 1. Kloniraj projekat
git clone https://github.com/Vlada018/projekatDMV.git
cd tvoj-repo

## 2. Instaliraj PHP zavisnosti
composer install

## 3. Instaliraj JavaScript zavisnosti
nmp install

## 4. Kopiraj .env fajl
cp .env.example .env

## 5. Podesi .env fajl
DB_DATABASE=uredjaji_app
DB_USERNAME=root
DB_PASSWORD=root

## 6. Generiši aplikacioni ključ
php artisan key:generate

## 7. Pokreni migracije i seedere
php artisan migrate --seed

## 8. Pokreni lokalni development server
php artisan serve

## 8. Pokreni Vite za frontend
npm run dev

## 9. Nalozi za logovanje
Kroz seedere su kreirana 3 korisnička naloga kao i test podaci. Parametri za naloge su sledeći:
            'name' => 'Korisnik 1',
            'email' => 'user1@example.com',
            'password' => '12345678',
        
            'name' => 'Korisnik 2',
            'email' => 'user2@example.com',
            'password' => '12345678',
        
            'name' => 'Korisnik 3',
            'email' => 'user3@example.com',
            'password' => '12345678'











