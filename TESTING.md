# Stan wydania

**Release Candidate 2, nie wersja finalna.** Poniższe testy dotyczą buildu 2026-10-13-rc2 i zostały wykonane przed przygotowaniem strony.

| Obszar | Wynik |
|---|---|
| Web: zapis, odzyskiwanie, interfejs, brak zewnętrznych żądań w badanych scenariuszach | 54 sprawdzenia |
| Migracja syntetycznych zapisów | 9 sprawdzeń |
| Nowe komunikaty PL/EN/DE i eksport | 27 sprawdzeń |
| Przewijanie i fokus ustawień | 36 sprawdzeń |
| Katalog zdolności i broni | 13 sprawdzeń |
| Śmierć i zakończenie rozgrywki | 5 sprawdzeń |
| Sklepy po rundach | 14 sprawdzeń |
| Endgame | 20 + 9 sprawdzeń |
| Istniejąca lokalizacja | 12 sprawdzeń |
| Dźwięki | 368 sprawdzeń |
| Automatyczne wyprawy | 8 scenariuszy, zwycięstwa i porażki |
| Pamięć | 120 cykli walki i menu; stabilizacja w badanym scenariuszu |
| EXE | Uruchomienie z czystego oraz przeniesionego folderu |

## Ograniczenia

Automatyczna wyprawa nie zastępuje testów gracza. Nie zweryfikowano wszystkich kombinacji bohaterów, map, RIFT-ów i sprzętu. Balans, pełne tłumaczenie wszystkich ścieżek oraz wielogodzinna stabilność wymagają dalszych testów. Test obciążenia EXE z ponad 220 przeciwnikami dał średnio około 51–52 FPS na komputerze testowym; nie jest to gwarancja wydajności. Pierwszy pomiar natywny został przerwany zamknięciem okna; ponowne uruchomienie zakończyło się poprawnie, przyczyna przerwania nie została potwierdzona. Brak podpisu EXE. Kontroler eksperymentalny. Aktualizacje instalowane ręcznie.

Testy strony prezentacyjnej opisano osobno w SITE-TESTS.md. Prywatne ścieżki, logi środowiska i profile testowe nie są publikowane.
