import List from '@/components/List'
import Vue from 'vue'

describe('List', () => {
  it('displays items from the list', () => {
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    expect(ListComponent.$el.textContent).to.contain('play games')
  })
  it('adds a new item to list on click', () => {
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    ListComponent.newItem = 'brush my teeth'
    // find button
    const button = ListComponent.$el.querySelector('button')

    // simulate click event
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    ListComponent._watcher.run()

    // assert list contains new item
    expect(ListComponent.$el.textContent).to.contain('brush my teeth')
    expect(ListComponent.listItems).to.contain('brush my teeth')
  })
})
