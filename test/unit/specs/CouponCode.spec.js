import { mount } from 'vue-test-utils'
import expect from 'expect'
import CouponCode from '@/components/CouponCode.vue'

describe('CouponCode', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CouponCode)
  })

  it('accepts a coupon code', () => {
    expect(wrapper.contains('input.coupon-code')).toBe(true)
  })

  it('it validates a real coupon code', () => {
    enterCouponCode('50OFF')
    expect(wrapper.html()).toContain('Coupon Redeemed: 50% Off!')
  })

  // it('it validates a fake coupon code', () => {
  //   enterCouponCode('NOTREAL')
  //   expect(wrapper.html()).toContain('Invalid Coupon Code')
  // })

  it('broadcasts the percentage discount when a valid coupon code is applied', () => {
    // wrapper.setData({
    //   code: '50OFF'
    // })

    // wrapper.vm.validate()
    enterCouponCode('50OFF')

    expect(wrapper.emitted().applied).toBeTruthy()
    expect(wrapper.emitted().applied[0]).toEqual([50])
  })

  function enterCouponCode (code) {
    let couponCode = wrapper.find('input.coupon-code')
    couponCode.element.value = code
    couponCode.trigger('input')
  }
})
