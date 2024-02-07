jest.mock('./Child', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => <div>AMIT</div>),
}));
