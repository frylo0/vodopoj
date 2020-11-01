-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 31 2020 г., 22:31
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `vodopoi`
--

-- --------------------------------------------------------

--
-- Структура таблицы `vpj_address`
--

CREATE TABLE `vpj_address` (
  `id_address` int(11) NOT NULL,
  `address_coords` varchar(25) NOT NULL,
  `address_city` varchar(50) NOT NULL,
  `address_street` varchar(50) NOT NULL,
  `address_house` varchar(5) NOT NULL,
  `address_housing` varchar(5) NOT NULL,
  `address_flat` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `vpj_address`
--

INSERT INTO `vpj_address` (`id_address`, `address_coords`, `address_city`, `address_street`, `address_house`, `address_housing`, `address_flat`) VALUES
(1, '44.958963, 34.086242', 'Симферополь', 'Ростовская', '00', '', '00');

-- --------------------------------------------------------

--
-- Структура таблицы `vpj_blacklist`
--

CREATE TABLE `vpj_blacklist` (
  `id_blacklist` int(11) NOT NULL,
  `blacklist_id_people` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `vpj_event`
--

CREATE TABLE `vpj_event` (
  `id_event` int(11) NOT NULL,
  `event_id_order` int(11) NOT NULL,
  `event_id_people` int(11) NOT NULL COMMENT 'Тот кто совершил действие',
  `event_id_eventtype` int(11) NOT NULL,
  `event_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `vpj_event`
--

INSERT INTO `vpj_event` (`id_event`, `event_id_order`, `event_id_people`, `event_id_eventtype`, `event_datetime`) VALUES
(1, 1, 1, 3, '2020-10-19 07:33:10');

-- --------------------------------------------------------

--
-- Структура таблицы `vpj_eventtype`
--

CREATE TABLE `vpj_eventtype` (
  `id_eventtype` int(11) NOT NULL,
  `eventtype_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `vpj_eventtype`
--

INSERT INTO `vpj_eventtype` (`id_eventtype`, `eventtype_name`) VALUES
(1, 'Отклик'),
(2, 'Отмена отклика'),
(3, 'Добавление'),
(4, 'Удаление'),
(5, 'Изменение данных');

-- --------------------------------------------------------

--
-- Структура таблицы `vpj_feature`
--

CREATE TABLE `vpj_feature` (
  `id_feature` int(11) NOT NULL,
  `feature_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `vpj_feature`
--

INSERT INTO `vpj_feature` (`id_feature`, `feature_name`) VALUES
(1, 'Видеть список пользователей');

-- --------------------------------------------------------

--
-- Структура таблицы `vpj_order`
--

CREATE TABLE `vpj_order` (
  `id_order` int(11) NOT NULL,
  `order_id_address` int(11) NOT NULL,
  `order_id_people` int(11) NOT NULL,
  `order_id_state` int(11) NOT NULL,
  `order_comment` text NOT NULL,
  `order_creation_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `vpj_order`
--

INSERT INTO `vpj_order` (`id_order`, `order_id_address`, `order_id_people`, `order_id_state`, `order_comment`, `order_creation_time`) VALUES
(1, 1, 1, 2, 'Тестовое принесите воды', '2020-10-19 07:32:37');

-- --------------------------------------------------------

--
-- Структура таблицы `vpj_people`
--

CREATE TABLE `vpj_people` (
  `id_people` int(11) NOT NULL,
  `people_name` varchar(100) NOT NULL,
  `people_login` varchar(50) NOT NULL,
  `people_password` varchar(50) NOT NULL,
  `people_phone` varchar(30) NOT NULL,
  `people_email` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `vpj_people`
--

INSERT INTO `vpj_people` (`id_people`, `people_name`, `people_login`, `people_password`, `people_phone`, `people_email`) VALUES
(1, 'Test Full Name', 'testlogin', 'testpass(must be md5)', '+79780001122', 'test@email.com');

-- --------------------------------------------------------

--
-- Структура таблицы `vpj_people_address`
--

CREATE TABLE `vpj_people_address` (
  `id_people_address` int(11) NOT NULL,
  `people_address_id_people` int(11) NOT NULL,
  `people_address_id_address` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `vpj_people_address`
--

INSERT INTO `vpj_people_address` (`id_people_address`, `people_address_id_people`, `people_address_id_address`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `vpj_people_role`
--

CREATE TABLE `vpj_people_role` (
  `id_people_role` int(11) NOT NULL,
  `people_role_id_people` int(11) NOT NULL,
  `people_role_id_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `vpj_people_role`
--

INSERT INTO `vpj_people_role` (`id_people_role`, `people_role_id_people`, `people_role_id_role`) VALUES
(1, 1, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `vpj_role`
--

CREATE TABLE `vpj_role` (
  `id_role` int(11) NOT NULL,
  `role_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `vpj_role`
--

INSERT INTO `vpj_role` (`id_role`, `role_name`) VALUES
(1, 'Админ'),
(2, 'Клиент'),
(3, 'Владыка');

-- --------------------------------------------------------

--
-- Структура таблицы `vpj_role_feature`
--

CREATE TABLE `vpj_role_feature` (
  `id_role_feature` int(11) NOT NULL,
  `role_feature_id_role` int(11) NOT NULL,
  `role_feature_id_feature` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `vpj_role_feature`
--

INSERT INTO `vpj_role_feature` (`id_role_feature`, `role_feature_id_role`, `role_feature_id_feature`) VALUES
(1, 1, 1),
(2, 3, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `vpj_state`
--

CREATE TABLE `vpj_state` (
  `id_state` int(11) NOT NULL,
  `state_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `vpj_state`
--

INSERT INTO `vpj_state` (`id_state`, `state_name`) VALUES
(1, 'Получен отклик'),
(2, 'Ожидает отклика'),
(3, 'Выполнено');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `vpj_address`
--
ALTER TABLE `vpj_address`
  ADD PRIMARY KEY (`id_address`);

--
-- Индексы таблицы `vpj_blacklist`
--
ALTER TABLE `vpj_blacklist`
  ADD PRIMARY KEY (`id_blacklist`),
  ADD KEY `blacklist_id_people` (`blacklist_id_people`);

--
-- Индексы таблицы `vpj_event`
--
ALTER TABLE `vpj_event`
  ADD PRIMARY KEY (`id_event`),
  ADD KEY `event_id_actor` (`event_id_people`),
  ADD KEY `event_id_eventtype` (`event_id_eventtype`),
  ADD KEY `event_id_order` (`event_id_order`);

--
-- Индексы таблицы `vpj_eventtype`
--
ALTER TABLE `vpj_eventtype`
  ADD PRIMARY KEY (`id_eventtype`);

--
-- Индексы таблицы `vpj_feature`
--
ALTER TABLE `vpj_feature`
  ADD PRIMARY KEY (`id_feature`);

--
-- Индексы таблицы `vpj_order`
--
ALTER TABLE `vpj_order`
  ADD PRIMARY KEY (`id_order`),
  ADD KEY `order_id_people` (`order_id_people`),
  ADD KEY `order_id_address` (`order_id_address`),
  ADD KEY `order_id_state` (`order_id_state`);

--
-- Индексы таблицы `vpj_people`
--
ALTER TABLE `vpj_people`
  ADD PRIMARY KEY (`id_people`),
  ADD UNIQUE KEY `people_login` (`people_login`),
  ADD UNIQUE KEY `people_email` (`people_email`),
  ADD UNIQUE KEY `people_phone` (`people_phone`);

--
-- Индексы таблицы `vpj_people_address`
--
ALTER TABLE `vpj_people_address`
  ADD PRIMARY KEY (`id_people_address`),
  ADD KEY `people_address_id_people` (`people_address_id_people`),
  ADD KEY `people_address_id_address` (`people_address_id_address`);

--
-- Индексы таблицы `vpj_people_role`
--
ALTER TABLE `vpj_people_role`
  ADD PRIMARY KEY (`id_people_role`),
  ADD KEY `people_role_id_role` (`people_role_id_role`),
  ADD KEY `people_role_id_people` (`people_role_id_people`) USING BTREE;

--
-- Индексы таблицы `vpj_role`
--
ALTER TABLE `vpj_role`
  ADD PRIMARY KEY (`id_role`);

--
-- Индексы таблицы `vpj_role_feature`
--
ALTER TABLE `vpj_role_feature`
  ADD PRIMARY KEY (`id_role_feature`),
  ADD KEY `role_feature_id_feature` (`role_feature_id_feature`),
  ADD KEY `role_feature_id_role` (`role_feature_id_role`);

--
-- Индексы таблицы `vpj_state`
--
ALTER TABLE `vpj_state`
  ADD PRIMARY KEY (`id_state`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `vpj_address`
--
ALTER TABLE `vpj_address`
  MODIFY `id_address` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `vpj_blacklist`
--
ALTER TABLE `vpj_blacklist`
  MODIFY `id_blacklist` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `vpj_event`
--
ALTER TABLE `vpj_event`
  MODIFY `id_event` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `vpj_eventtype`
--
ALTER TABLE `vpj_eventtype`
  MODIFY `id_eventtype` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `vpj_feature`
--
ALTER TABLE `vpj_feature`
  MODIFY `id_feature` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `vpj_order`
--
ALTER TABLE `vpj_order`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `vpj_people`
--
ALTER TABLE `vpj_people`
  MODIFY `id_people` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `vpj_people_address`
--
ALTER TABLE `vpj_people_address`
  MODIFY `id_people_address` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `vpj_people_role`
--
ALTER TABLE `vpj_people_role`
  MODIFY `id_people_role` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `vpj_role`
--
ALTER TABLE `vpj_role`
  MODIFY `id_role` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `vpj_role_feature`
--
ALTER TABLE `vpj_role_feature`
  MODIFY `id_role_feature` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `vpj_state`
--
ALTER TABLE `vpj_state`
  MODIFY `id_state` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `vpj_blacklist`
--
ALTER TABLE `vpj_blacklist`
  ADD CONSTRAINT `vpj_blacklist_ibfk_1` FOREIGN KEY (`blacklist_id_people`) REFERENCES `vpj_people` (`id_people`);

--
-- Ограничения внешнего ключа таблицы `vpj_event`
--
ALTER TABLE `vpj_event`
  ADD CONSTRAINT `vpj_event_ibfk_1` FOREIGN KEY (`event_id_people`) REFERENCES `vpj_people` (`id_people`),
  ADD CONSTRAINT `vpj_event_ibfk_2` FOREIGN KEY (`event_id_order`) REFERENCES `vpj_order` (`id_order`),
  ADD CONSTRAINT `vpj_event_ibfk_3` FOREIGN KEY (`event_id_eventtype`) REFERENCES `vpj_eventtype` (`id_eventtype`);

--
-- Ограничения внешнего ключа таблицы `vpj_order`
--
ALTER TABLE `vpj_order`
  ADD CONSTRAINT `vpj_order_ibfk_1` FOREIGN KEY (`order_id_people`) REFERENCES `vpj_people` (`id_people`),
  ADD CONSTRAINT `vpj_order_ibfk_2` FOREIGN KEY (`order_id_address`) REFERENCES `vpj_address` (`id_address`),
  ADD CONSTRAINT `vpj_order_ibfk_3` FOREIGN KEY (`order_id_state`) REFERENCES `vpj_state` (`id_state`);

--
-- Ограничения внешнего ключа таблицы `vpj_people_address`
--
ALTER TABLE `vpj_people_address`
  ADD CONSTRAINT `vpj_people_address_ibfk_1` FOREIGN KEY (`people_address_id_address`) REFERENCES `vpj_address` (`id_address`),
  ADD CONSTRAINT `vpj_people_address_ibfk_2` FOREIGN KEY (`people_address_id_people`) REFERENCES `vpj_people` (`id_people`);

--
-- Ограничения внешнего ключа таблицы `vpj_people_role`
--
ALTER TABLE `vpj_people_role`
  ADD CONSTRAINT `vpj_people_role_ibfk_1` FOREIGN KEY (`people_role_id_people`) REFERENCES `vpj_people` (`id_people`),
  ADD CONSTRAINT `vpj_people_role_ibfk_2` FOREIGN KEY (`people_role_id_role`) REFERENCES `vpj_role` (`id_role`);

--
-- Ограничения внешнего ключа таблицы `vpj_role_feature`
--
ALTER TABLE `vpj_role_feature`
  ADD CONSTRAINT `vpj_role_feature_ibfk_2` FOREIGN KEY (`role_feature_id_feature`) REFERENCES `vpj_feature` (`id_feature`),
  ADD CONSTRAINT `vpj_role_feature_ibfk_3` FOREIGN KEY (`role_feature_id_role`) REFERENCES `vpj_role` (`id_role`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
