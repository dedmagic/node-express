DELETE FROM employees;
DELETE FROM positions;

INSERT INTO positions(id, name, parentId)
VALUES
  (1, "Начальник", NULL),
  (2, "Заместитель начальника", 1),
  (3, "Начальник отдела", 2),
  (4, "Клерк", 3);

INSERT INTO employees(id, name, positionId)
VALUES 
  (1, "Иванов И.И.", 2),
  (2, "Петров П.П.", 3),
  (3, "Гейтс Б.", 4),
  (4, "Сидоров С.С.", 1),
  (5, "Маск И.", 2),
  (6, "Горыныч З.", NULL);
