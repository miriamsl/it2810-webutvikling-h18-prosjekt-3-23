import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Appointment from '../src/components/Appointment/Appointment';
import MockAsyncStorage from 'mock-async-storage';
import { AsyncStorage as storage } from 'react-native';

const navigationEx = { addListener: jest.fn() };
let scoreEx = 0;

const appoints= renderer.create(<Appointment navigation={navigationEx}/>);

//Implements mocks
const mock = () => {
    const mockImpl = new MockAsyncStorage()
    jest.mock('AsyncStorage', () => mockImpl)
};

describe('score', () => {
    test('setState is called when increaseScore', async () => {
        const instance = appoints.root.instance;
        const mockSetState = jest.fn();
        instance.setState = mockSetState;
        instance.increaseScore();
        expect(mockSetState).toHaveBeenCalled();
    });

    test('should change state when decreaseScore is called', () => {
      const instance = appoints.root.instance;
      const mockSetState = jest.fn();
      instance.setState = mockSetState;
      instance.decreaseScore(2)
      expect(mockSetState).toHaveBeenCalled();
      })
});

describe('storage', () => {
    test('storeItem should set state with no errors', () => {
        const instance = appoints.root.instance;
        instance.storeItem({}).then((error) => {
            expect(error).toEqual(null);
            expect(instance.setState({})).toBeCalled();
        });
    });

    test('storeItem should store in AsyncStorage with no errors', () => {
        const instance = appoints.root.instance;
        instance.storeItem({}).then((error) => {
            expect(error).toEqual(null);
            expect(storage.setItem).toBeCalledWith('test', JSON.stringify({}));
        });
    });

    test('getAppScoreAsync should set state with no errors', () => {
        const instance = appoints.root.instance;
        instance.getAppScoreAsync().then((error) => {
            expect(error).toEqual(null);
            expect(instance.setState()).toBeCalled();
        });
    });

});

