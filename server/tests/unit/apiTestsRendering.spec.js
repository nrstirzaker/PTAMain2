// import {mount} from '@vue/test-utils'
// import Index from '../../pages/index.vue'
//
// describe('Index.vue', () => {
//
//   it('Next meeting should return future a date', () => {
//
//     const wrapper = mount(Index);
//     const returnedDate = wrapper.vm.next2ndHandUniformSale();
//     expect(returnedDate.valueOf()).toBeGreaterThan(new Date().getTime());
//
//   })
//
//   it('Next 2nd Hand uniform Sale should return future a date', () => {
//
//     const wrapper = mount(Index);
//     const returnedDate = wrapper.vm.nextMeeting();
//     expect(returnedDate.valueOf()).toBeGreaterThan(new Date().getTime());
//
//   })
//
//   it('Members should bring back multiple results', () => {
//
//     const sampleMemberData = {"index": 1, "role": "Chair", "name": "Nigel Stirzaker"};
//
//     const wrapper = mount(Index);
//     const members = wrapper.vm.getMembers();
//
//     members.then('ok').catch(err => {
//       console.log("!!!!!!" + err)
//     })
//     //console.log(members);
//     //expect(members).not.toBeNull();
//     expect(members).resolves.toEqual(expect.objectContaining({"index": 1, "role": "Chair", "name": expect.any(String)}));
//     expect(members).rejects.toEqual("TypeError: Cannot read property 'get' of undefined]");
//     //expect(members).resolves.toEqual(expect.objectContaining({"index": 1, "role": "Chair", "name": expect.any(String)}));
//
//   })
//
// })
