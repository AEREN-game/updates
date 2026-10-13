# Publikacja — AEREN-game/updates

Ta paczka została przygotowana lokalnie. Nic nie zostało wysłane do GitHuba.

## 1. Pliki repozytorium

Przed zmianą istniejącego repozytorium zachowaj jego aktualną zawartość. Dodaj **zawartość folderu repository**, nie nadrzędny folder github-ready. Nie kasuj istniejących manifestów aktualizacji ani starych wydań. Przy kolizji nazw przejrzyj różnice przed zastąpieniem. Ta paczka nie włącza automatycznego aktualizatora.

Można użyć GitHub Desktop lub przesyłania plików w przeglądarce. Folder docs zawiera stronę, grafiki, gotową wersję Web w play i ZIP-y w downloads. Pliki działają również pod ścieżką /updates/.

## 2. Strona

W repozytorium wybierz Settings → Pages → Build and deployment → Source: Deploy from a branch. Wybierz gałąź zawierającą te pliki (zwykle main) i folder /docs, następnie Save. Po zakończeniu publikacji planowany adres to https://aeren-game.github.io/updates/.

Instrukcja GitHuba: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Przy innej nazwie właściciela/repozytorium zmień dwa adresy w README.md. Sama strona używa ścieżek względnych. Nie wymaga zewnętrznych bibliotek, kluczy API ani procesu kompilacji.

## 3. Wydanie

Otwórz Releases → Draft a new release. Ustaw tag **v1.0.0-rc2**, tytuł **AEREN 1.0.0 RC2 — Kroniki otchłani**. Wklej treść RELEASE.md i zaznacz **Set as a pre-release**. Dołącz cztery pliki z docs/downloads: Windows ZIP, Web ZIP oraz dwie sumy SHA-256. Opublikuj dopiero po sprawdzeniu podglądu.

Nie oznaczaj tego wydania jako finalne 1.0.0. Wbudowany numer gry nadal wynosi 1.0.0; RC2 identyfikuje build i tag dystrybucyjny.

## 4. Po publikacji

Otwórz stronę, przełącz mapy, powiększ grafikę, pobierz oba ZIP-y i porównaj ich SHA-256. Uruchom wersję Web i sprawdź zapis po odświeżeniu. Sprawdź link Windows w README. Nie usuwaj działającego starego wydania, zanim nowa paczka nie przejdzie kontroli.

Nie dodawaj całego workspace, prywatnych zapisów, kopii profili ani folderów work i narzędzi developerskich. Pełny projekt źródłowy nie jest częścią tej publikacji, ale kod wykonywalny wersji Web jest z natury dostępny przeglądarce.
