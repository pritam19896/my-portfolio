import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  msg = 'Blog';

  // blogInfo:Blog[];

  blogInfo =[
    {
        topic: 'Health',
        content: 'A health blog can cover diverse health related concerns such as nutrition and diet, fitness, weight\n    control, diseases, disease management, societal trends affecting health, analysis about health,\n    business of health and health research.\n\n    It acts as a health education platform, where diverse users collaborate to seek and/or contribute\n    health content within the standard guidelines. Although it is not a requirement, a health blog can\n    be interactive, engaging and collaborative with its users in the creation of content. A health\n    blog can grow in user size and operate as an online community.',
        img: './assets/blogs/health.jpeg'
    },
    {
        topic: "Exercise",
        content:"Physical exercise is important for maintaining physical fitness and can contribute to maintaining a\n    healthy weight, regulating the digestive system, building and maintaining healthy bone density,\n    muscle strength, and joint mobility, promoting physiological well-being, reducing surgical risks,\n    and strengthening the immune system. Some studies indicate that exercise may increase life\n    expectancy and the overall quality of life. People who participate in moderate to high levels\n    of physical exercise have a lower mortality rate compared to individuals who by comparison are not\n    physically active. Moderate levels of exercise have been correlated with preventing aging by\n    reducing inflammatory potential.",
        img: "./assets/blogs/exercise.jpg"
    },
    {
        topic: "Yoga",
        content:"There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and\n    Jainism. The term \"Yoga\" in the Western world often denotes a modern form of hatha yoga\n    and yoga as exercise, consisting largely of the postures called asanas.\n\n    The origins of yoga have been speculated to date back to pre-vedic Indian traditions; possibly in\n    the Indus valley civilization around 3000 BCE. Yoga is mentioned in the Rigveda, also\n    referenced in the Upanishads, but yoga most likely developed as a systematic study around the\n    5th and 6th centuries BCE, in ancient India's ascetic and śramaṇa movements. The\n    chronology of earliest texts describing yoga-practices is unclear, varyingly credited to\n    Upanishads.",
        img: "./assets/blogs/yoga.jpg"
    },
    {
        topic: "Meditation",
        content:"Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing\n    the mind on a particular object, thought, or activity – to train attention and awareness, and\n    achieve a mentally clear and emotionally calm and stable state. Scholars have found meditation\n    difficult to define, as practices vary both between traditions and within them.\n\n    Meditation has been practiced since antiquity in numerous religious traditions, often as part of\n    the path towards enlightenment and self realization.",
        img: "./assets/blogs/meditiation.jpg"
    },
    {
        topic: "Habits",
        content:"A habit (or wont as a humorous and formal term) is a routine of behavior that is repeated regularly\n    and tends to occur subconsciously.\n\n    The American Journal of Psychology (1903) defines a \"habit, from the standpoint of psychology, [as]\n    a more or less fixed way of thinking, willing, or feeling acquired through previous repetition of a\n    mental experience.\" Habitual behavior often goes unnoticed in persons exhibiting it, because a\n    person does not need to engage in self-analysis when undertaking routine tasks. Habits are\n    sometimes compulsory.",
        img: "./assets/blogs/habits.jpg"
    }
]
  constructor() { }


  ngOnInit(): void {
  }

}
