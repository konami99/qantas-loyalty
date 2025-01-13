import { StringHelper } from "../../app/services/StringHelper";

describe('StringHelper', () => {
  it('truncates string', () => {
    const longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

    expect(StringHelper.truncate(longText)).toEqual("Lorem Ipsum is simply dummy te...");
  })
})