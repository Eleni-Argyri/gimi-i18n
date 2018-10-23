// @flow
let defaultCourse = {}
let defaultChapter = {
  icon: 'iconHeart'
}
export default [
  {
    ...defaultCourse,
    name: 'save',
    titleLangKey: 'course_save_title',
    subtitleLangKey: '',
    chapters: [
      {
        ...defaultChapter,
        chapterID: 'save_chapter_1',
        chapterName: 'Intro to interest',
        titleLangKey: 'save_chapter_1',
        content: {
          chapterIntroLangKey: 'save_chapter_1_intro',
          chapterSessionDescLangKey: 'save_chapter_1_desc',
          slideContent: [
            {
              titleLangKey: 'save_chapter_1_step_1_title',
              descLangKey: 'save_chapter_1_step_1_desc'
            },
            {
              titleLangKey: 'save_chapter_1_step_2_title',
              descLangKey: 'save_chapter_1_step_2_desc'
            },
            {
              titleLangKey: 'save_chapter_1_step_3_title',
              descLangKey: 'save_chapter_1_step_3_desc'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        chapterID: 'save_chapter_2',
        chapterName: 'Cutting back on sweets',
        titleLangKey: 'save_chapter_2',
        content: {
          chapterIntroLangKey: 'save_chapter_2_intro',
          chapterSessionDescLangKey: 'save_chapter_2_desc',
          slideContent: [
            {
              titleLangKey: 'save_chapter_2_step_1_title',
              descLangKey: 'save_chapter_2_step_1_desc'
            },
            {
              titleLangKey: 'save_chapter_2_step_2_title',
              descLangKey: 'save_chapter_2_step_2_desc'
            },
            {
              titleLangKey: 'save_chapter_2_step_3_title',
              descLangKey: 'save_chapter_2_step_3_desc'
            }
          ]
        }
      }
    ]
  },
  {
    ...defaultCourse,
    name: 'earn',
    titleLangKey: 'course_earn_title',
    subtitleLangKey: '',
    chapters: [
      {
        ...defaultChapter,
        chapterID: 'earn_chapter_1',
        chapterName: 'Easy cash',
        titleLangKey: 'earn_chapter_1',
        content: [

        ]
      }
    ]
  },
  {
    ...defaultCourse,
    name: 'spend',
    titleLangKey: 'course_spend_title',
    subtitleLangKey: '',
    chapters: [
      {
        ...defaultChapter,
        chapterID: 'spend_chapter_1',
        chapterName: 'Spend like rich kids',
        titleLangKey: 'spend_chapter_1',
        content: [

        ]
      }
    ]
  }
]
