import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  let wrapper;
  const mockLoginUser = jest.fn();
  const mockCurrentUser = {
    id: 3,
    name: "bill",
    email: "bill@gmail.com"
  }
  const mockCreateNewUser = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Login 
      loginUser={mockLoginUser}
      currentUser={mockCurrentUser}
      createNewUser={mockCreateNewUser}
    />)
  })

  it('should take a snapshot when passed valid data', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update createName state onChange of input', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: 'Jacob', name: 'createName' } });
    expect(wrapper.state('createName')).toEqual('Jacob')
  })

  it('should update createEmail state onChange of input', () => {
    wrapper.find('input').at(1).simulate('change', { target: { value: 'jacob@gmail.com', name: 'createEmail' } });
    expect(wrapper.state('createEmail')).toEqual('jacob@gmail.com')
  })

  it('should update createPassword state onChange of input', () => {
    wrapper.find('input').at(2).simulate('change', { target: { value: 'sweetPassword123', name: 'createPassword' } });
    expect(wrapper.state('createPassword')).toEqual('sweetPassword123')
  })

  it('should update loginEmail state onChange of input', () => {
    wrapper.find('input').at(3).simulate('change', { target: { value: 'jogren@gmail.com', name: 'loginEmail' } });
    expect(wrapper.state('loginEmail')).toEqual('jogren@gmail.com')
  })

  it('should update loginPassword state onChange of input', () => {
    wrapper.find('input').at(4).simulate('change', { target: { value: 'sweetPassword321', name: 'loginPassword' } });
    expect(wrapper.state('loginPassword')).toEqual('sweetPassword321')
  })

  it('should invoke createNewUser with a structued object', () => {
    const expected = {
      name: 'Jacob',
      email: 'jacob@gmail.com',
      password: 'sweetPassword123'
    }
    let e = {
      preventDefault: jest.fn()
    }

    wrapper.setState({ 
      createName: 'Jacob',
      createEmail: 'jacob@gmail.com',
      createPassword: 'sweetPassword123'
     })
    wrapper.instance().structureUserObject(e);
    expect(mockCreateNewUser).toHaveBeenCalledWith(expected);
  })

  it('should invoke loginUser with a structured user object', () => {
    const expected = {
      email: 'jacob@gmail.com',
      password: 'sweetPassword123'
    }

    wrapper.setState({
      loginEmail: 'jacob@gmail.com',
      loginPassword: 'sweetPassword123'
    })
    wrapper.instance().structureLoginUserObject();
    expect(mockLoginUser).toHaveBeenCalledWith(expected);
  })

})