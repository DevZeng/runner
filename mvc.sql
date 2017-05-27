-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-05-22 07:05:31
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mvc`
--

-- --------------------------------------------------------

--
-- 表的结构 `activity`
--

CREATE TABLE `activity` (
  `aid` int(4) NOT NULL,
  `uid` int(3) NOT NULL,
  `title` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `location` varchar(50) NOT NULL,
  `time` int(11) NOT NULL,
  `setlocation` varchar(50) NOT NULL,
  `settime` int(11) NOT NULL,
  `starttime` int(11) NOT NULL,
  `endtime` int(11) NOT NULL,
  `numbers` int(4) NOT NULL,
  `longer` varchar(5) NOT NULL,
  `award` varchar(20) NOT NULL,
  `images` varchar(40) NOT NULL,
  `content` text NOT NULL,
  `cid` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `activity`
--

INSERT INTO `activity` (`aid`, `uid`, `title`, `location`, `time`, `setlocation`, `settime`, `starttime`, `endtime`, `numbers`, `longer`, `award`, `images`, `content`, `cid`) VALUES
(1, 1, 'title1', 'dasf', 1234, '', 0, 0, 0, 0, '', '', '', '', 0),
(2, 1, 'title2', 'dsfa', 213, 'asdfasd', 12, 1, 1, 123, '2', 'adsf', '', 'dasfaf', 0),
(3, 1, 'title3', '', 0, '', 0, 0, 0, 0, '', '', '', '', 0);

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', '827ccb0eea8a706c4c34a16891f84e7b');

-- --------------------------------------------------------

--
-- 表的结构 `afsd`
--

CREATE TABLE `afsd` (
  `id` int(3) NOT NULL,
  `encode` varchar(40) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `artical`
--

CREATE TABLE `artical` (
  `id` int(3) NOT NULL,
  `img` varchar(30) COLLATE utf8_bin NOT NULL,
  `title` varchar(50) COLLATE utf8_bin NOT NULL,
  `content` text COLLATE utf8_bin NOT NULL,
  `read` int(3) NOT NULL,
  `type` int(1) NOT NULL,
  `uid` int(3) NOT NULL,
  `tid` int(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `artical`
--

INSERT INTO `artical` (`id`, `img`, `title`, `content`, `read`, `type`, `uid`, `tid`) VALUES
(1, 'test', 'test', 'test', 3, 1, 0, 0);

-- --------------------------------------------------------

--
-- 表的结构 `city`
--

CREATE TABLE `city` (
  `id` int(3) NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `p_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `city`
--

INSERT INTO `city` (`id`, `name`, `p_id`) VALUES
(1, 'å¹¿ä¸œ', 2),
(4, 'ä»ŽåŒ–åŒº', 2),
(5, 'èŠ±éƒ½åŒº', 2),
(6, 'ç™½äº‘åŒº', 2),
(7, 'å“ˆå“ˆå“ˆ', 2),
(8, 'soga', 2);

-- --------------------------------------------------------

--
-- 表的结构 `joinlist`
--

CREATE TABLE `joinlist` (
  `id` int(3) NOT NULL,
  `aid` int(3) NOT NULL,
  `cid` int(3) NOT NULL,
  `uid` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `joinlist`
--

INSERT INTO `joinlist` (`id`, `aid`, `cid`, `uid`) VALUES
(1, 1, 4, 1),
(3, 2, 1, 1);

-- --------------------------------------------------------

--
-- 表的结构 `maillist`
--

CREATE TABLE `maillist` (
  `uid` int(3) NOT NULL,
  `time` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(4) NOT NULL,
  `title` char(50) NOT NULL,
  `author` varchar(20) NOT NULL,
  `from` varchar(20) NOT NULL,
  `content` text NOT NULL,
  `dateline` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `author`, `from`, `content`, `dateline`) VALUES
(1, 'A', 'B', 'C', 'D', 0),
(2, 'title', 'author', 'from', '                                        content123 45', 1461660030),
(3, 'title', 'author', 'from', '                                        content123 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;', 1461659802);

-- --------------------------------------------------------

--
-- 表的结构 `provinces`
--

CREATE TABLE `provinces` (
  `id` int(3) NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `provinces`
--

INSERT INTO `provinces` (`id`, `name`) VALUES
(2, 'å¹¿ä¸œ');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `uid` int(3) NOT NULL,
  `username` varchar(11) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `active` int(1) NOT NULL DEFAULT '1',
  `send` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`uid`, `username`, `password`, `email`, `active`, `send`) VALUES
(1, 'usertest', '827ccb0eea8a706c4c34a16891f84e7b', '10@qq.com', 1, 0),
(2, 'a', 'a', 'a', 0, 0),
(3, '1', '1', '1', 0, 0),
(4, '4', '4', '4', 0, 0),
(5, '5', '5', '5', 0, 0),
(6, 'ab', '12345', '1045968406@qq.com', 0, 0),
(8, 'test', '827ccb0eea8a706c4c34a16891f84e7b', 'zengshungeng@live.com', 2, 0),
(9, 'b', '92eb5ffee6ae2fec3ad71c777531578f', 'b', 1, 1),
(10, 'cikie', '118473f6e30e358f161f64e1aee31fd9', 'cikie100@163.com', 1, 1);

-- --------------------------------------------------------

--
-- 表的结构 `userinfo`
--

CREATE TABLE `userinfo` (
  `id` int(3) NOT NULL,
  `area` varchar(10) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `realname` varchar(20) NOT NULL,
  `sex` int(1) NOT NULL,
  `emotion` varchar(20) NOT NULL,
  `birthday` int(6) NOT NULL,
  `blood` varchar(3) NOT NULL,
  `blog` varchar(50) NOT NULL,
  `Introduction` varchar(300) NOT NULL,
  `email` varchar(30) NOT NULL,
  `QQ` varchar(20) NOT NULL,
  `MSN` varchar(30) NOT NULL,
  `profession` varchar(20) NOT NULL,
  `education` varchar(20) NOT NULL,
  `uid` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `userinfo`
--

INSERT INTO `userinfo` (`id`, `area`, `nickname`, `realname`, `sex`, `emotion`, `birthday`, `blood`, `blog`, `Introduction`, `email`, `QQ`, `MSN`, `profession`, `education`, `uid`) VALUES
(1, 'areatest', 'anonymous', 'anonymous', 1, 'single doge', 0, 'A', 'www.test.blog.com', 'just a saltedfish', '1111@test.com', '11111', '11111', 'student', 'college', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`aid`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `afsd`
--
ALTER TABLE `afsd`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `artical`
--
ALTER TABLE `artical`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `joinlist`
--
ALTER TABLE `joinlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `activity`
--
ALTER TABLE `activity`
  MODIFY `aid` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `afsd`
--
ALTER TABLE `afsd`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT;
--
-- 使用表AUTO_INCREMENT `artical`
--
ALTER TABLE `artical`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `city`
--
ALTER TABLE `city`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- 使用表AUTO_INCREMENT `joinlist`
--
ALTER TABLE `joinlist`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
