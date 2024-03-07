import { renderHook } from '@testing-library/react';
import useOnlineStatus from '../../utils/useOnlineStatus';
import { act } from "react-dom/test-utils";

describe('useOnlineStatus', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'addEventListener', {
      value: jest.fn(),
    });
  });

  it('should return true when online', () => {
    const { result } = renderHook(() => useOnlineStatus());
    expect(result.current).toBe(true);
  });

  it('should return false when offline', () => {
    const { result } = renderHook(() => useOnlineStatus());
    const offlineEventCallback = window.addEventListener.mock.calls.find(
      call => call[0] === 'offline'
    )[1];
    act(()=>offlineEventCallback());
    expect(result.current).toBe(false);
  });

  it('should return true after going offline and then online again', () => {
    const { result } = renderHook(() => useOnlineStatus());
    const offlineEventCallback = window.addEventListener.mock.calls.find(
      call => call[0] === 'offline'
    )[1];
    const onlineEventCallback = window.addEventListener.mock.calls.find(
      call => call[0] === 'online'
    )[1];
    act(()=>offlineEventCallback());
    expect(result.current).toBe(false);
    act(()=> onlineEventCallback());
    expect(result.current).toBe(true);
  });
});