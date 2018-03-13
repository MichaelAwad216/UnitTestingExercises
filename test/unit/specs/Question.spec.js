import { mount } from 'vue-test-utils'
import expect from 'expect'
import Question from '@/components/Question.vue'

describe('Question', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Question, {
      propsData: {
        dataQuestion: {
          title: 'The Title',
          body: 'The Body'
        }
      }
    })
  })

  it('present the title and the body', () => {
    see('The Title')
    see('The Body')
  })

  it('can be edited', () => {
    expect(wrapper.contains('input[name=title')).toBe(false)

    wrapper.find('#edit').trigger('click')

    expect(wrapper.find('input[name=title]').element.value).toBe('The Title')
    expect(wrapper.find('textarea[name=body]').element.value).toBe('The Body')
  })

  it('hides the edit button during edit mode', () => {
    wrapper.find('#edit').trigger('click')
    expect(wrapper.contains('#edit')).toBe(false)
  })

  it('updates the question afer being editted', () => {
    wrapper.find('#edit').trigger('click')

    type('input[name=title]', 'Changed Title')
    type('textarea[name=body]', 'Changed Body')

    click('#update')

    see('Changed Title')
    see('Changed Body')
  })

  let see = (text, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper
    expect(wrap.html()).toContain(text)
  }

  let type = (selector, text) => {
    let node = wrapper.find(selector)

    node.element.value = text
    node.trigger('input')
  }

  let click = selector => {
    wrapper.find(selector).trigger('click')
  }
})
