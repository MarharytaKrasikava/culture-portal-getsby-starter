import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import React from 'react';

export default function TimelineElement() {
  const author = {
    name: 'Владимир',
    surname: 'Корш-Саблин',
    birthDate: '29.03.1900',
    deathDate: '06.07.1974',
    birthPlace: 'Москва, Российская Империя',
    deathPlace: 'Минск, БССР',
    kinipoisk: 'https://www.kinopoisk.ru/name/346647/',
    listOfWorks: [
      { film: 'В огне рожденная', date: 1930 },
      { film: 'Первый взвод', date: 1933 },
      { film: 'Моя любовь', date: 1940 },
      { film: 'Константин Заслонов', date: 1949 },
      { film: 'Кто смеётся последним', date: 1954 },
      { film: 'Красные листья', date: 1958 },
      { film: 'Первые испытания', date: 1960 },
      { film: 'Москва - Генуя', date: 1964 },
      { film: 'Крушение империи', date: 1970 },
    ],
    timeline: [
      { date: 1900, description: 'Владимир Корш-Саблин родился в Москве.' },
      { date: 1917, description: 'Окончание театрального училища' },
      { date: 1923, description: 'Работа ассистентом режиссёра в киностудии «Госкино» в Москве' },
      { date: 1926, description: 'Переезд в Минск и работа актёром и режиссёром киностудии «Советская Беларусь» (позже «Беларусьфильм»)' },
      { date: 1945, description: 'Занимает должность художественного руководителя киностудии "Беларусьфильм"' },
      { date: 1950, description: 'Сталинская премия третьей степени за фильм «Константин Заслонов»' },
      { date: 1962, description: 'Занимает должность первого секретаря Союза кинематографистов Белоруссии.' },
      { date: 1964, description: 'Получает Вторую премию по разделу историко-революционных фильмов I-го Всесоюзного кинофестиваля за фильм  «Москва — Генуя»' },
      { date: 1969, description: 'Получает награду "Народный артист СССР"' },
      { date: 1974, description: 'Cкончался 6 июля 1974 года. Похоронен в Минске на Восточном кладбище' },
    ],
    youtube: 'https://www.youtube.com/watch?v=g1qkRRX6aKc',
    text:
        `Владимир Владимирович Корш-Саблин (настоящая фамилия — Саблин; белор. Уладзімір Уладзіміравіч Корш-Саблін; 16 (29) марта 1900, Москва — 6 июля 1974) — белорусский советский кинорежиссёр, актёр кино. Народный артист СССР (1969). Лауреат Сталинской премии (1950). Один из основоположников белорусского кино.
        Владимир Корш-Саблин родился в Москве. После окончания реального училища, в 1917 году начал творческую деятельность как актёр в театре своего деда по матери, Федора Адамовича Корша — Театре Корша (по семейному преданию, дед, впечатленный успехами внука, разрешил ему соединить обе фамилии). Участник Гражданской войны.
        Служил в театрах Симферополя, Мелитополя, Казани.
        В кино пришёл в 1923 году. С 1925 года был помощником, ассистентом режиссёра и актёром киностудии «Госкино» («Совкино») в Москве, с 1926 года — актёр и режиссёр (с 1929 года) киностудии «Советская Беларусь» специального управления «Белгоскино» (позже «Беларусьфильм»); снимал комедии, фильмы-драмы, биографические фильмы.
        В 1945—1960 и 1969—1974 годах Корш-Саблин был художественным руководителем киностудии «Беларусьфильм». С 1957 года — председателем Оргбюро Союза работников кинематографии Белорусской ССР. В 1962—1974 годах — первый секретарь Союза кинематографистов БССР. Член Союза кинематографистов СССР.
        Член ВКП(б) с 1948 года.
        Владимир Владимирович Корш-Саблин скончался 6 июля 1974 года. Похоронен в Минске на Восточном кладбище.
        
        Награды и звания:
        заслуженный деятель искусств Белорусской ССР (1935)
        народный артист Белорусской ССР (1955)
        народный артист СССР (1969)
        Сталинская премия третьей степени (1950) — за фильм «Константин Заслонов» (1949)
        Государственная премия Белорусской ССР (1967) — за фильм «Москва — Генуя» (1964)
        Всесоюзный кинофестиваль (Вторая премия за историко-революционный фильм, фильм «Москва — Генуя», 1964)
        орден Ленина
        орден Октябрьской революции
        орден Трудового Красного Знамени
        орден «Знак Почёта».`,
  };
  return (
    <React.Fragment>
      <Timeline lineColor="#ddd">
        {author.timeline.map((element, index) => (
          <TimelineItem
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            dateText={element.date}
            dateInnerStyle={{ background: '#e86971', color: '#000' }}
          >
            {element.description}
          </TimelineItem>
        ))}
      </Timeline>
    </React.Fragment>
  );
}
