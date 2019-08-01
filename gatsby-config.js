module.exports = {
  siteMetadata: {
    title: 'BCJ.by',
    fullTitle: 'Belarusian Cinema Jungle',
    mainTitle: 'Film directors of Belarus',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
    infoText: 'Пригреваемый весенним солнцем, он сидел в коляске, поглядывая на первую траву,первые листья березы и первые клубы белых весенних облаков, разбегавшихся по яркой синеве неба. Он ни о чем не думал, а весело и бессмысленно смотрел по сторонам... На краю дороги стоял дуб. Вероятно в десять раз старше берез, составлявших лес, он был в десять раз толще и в два раза выше каждой березы. Это был огромный в два обхвата дуб с обломанными, давно видно, суками и с обломанной корой, заросшей старыми болячками. С огромными своими неуклюжими, несимметрично-растопыренными, корявыми руками и пальцами, он старым, сердитым и презрительным уродом стоял между улыбающимися березами. Только он один не хотел подчиняться обаянию весны и не хотел видеть ни весны, ни солнца. «Весна, и любовь, и счастие!»– как будто говорил этот дуб,– «и как не надоест вам все один и тот же глупый и бессмысленный обман. nВсе одно и тоже, и все обман! Нет ни весны, ни солнца, ни счастия. Вон смотрите, сидят задавленные мертвые ели, всегда одинакие, и вон и я растопырил свои обломанные, ободранные пальцы, где ни выросли они – из спины, из боков; как выросли – так и стою, и не верю вашим надеждам и обманам». Князь Андрей несколько раз оглянулся на этот дуб, проезжая по лесу, как будто он чего-то ждал от него. Цветы и трава были и под дубом, но он все так же, хмурясь, неподвижно, уродливо и упорно, стоял посреди их. «Да, он прав, тысячу раз прав этот дуб, – думал князь Андрей, пускай другие, молодые, вновь поддаются на этот обман, а мы знаем жизнь,– наша жизнь кончена!» Целый новый ряд мыслей безнадежных, но грустно-приятных в связи с этим дубом, возник в душе князя Андрея. Во время этого путешествия он как будто вновь обдумал всю свою жизнь, и пришел к тому же прежнему успокоительному и безнадежному заключению, что ему начинать ничего было не надо, что он должен доживать свою жизнь, не делая зла, не тревожась и ничего не желая.',
    footerTitle: 'Belarusian Cinema Jungle',
    github: 'https://github.com/vladislavkhlebec/culture-portal-getsby-starter',
    dayAuthorTitle: 'Author of the day',
    dayAuthorName: 'Leonid Alexeyevich Nechayev',
    dayAuthorYearsLife: 'May 1939 – 24 January 2010',
    dayAuthorInfo: "Nechayev's career as director was launched in 1974 with a film called The Adventure in a Town That Doesn't Exist. He was also the creator of the popular musical fairy tales About The Little Red Riding Hood and The Adventures of Buratino. He was a prolific director at the studio Belarusfilm, where he worked for 17 years and shot 10 films. The Minsk Museum of Cinema has a hall exclusively dedicated to his creative legacy.",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/pages/directors`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-remark',
  ],
};
