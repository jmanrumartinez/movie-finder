import PromiseEnum from '../../../utils/enums/PromiseEnum';

export default (state, action) => {
  switch (action.type) {
    case PromiseEnum.Resolved:
      return { data: action.data, status: action.type };
    case PromiseEnum.Pending:
      return { status: action.type };
    case PromiseEnum.Rejected:
      return { error: action.error, status: 'error' };
    default:
      return state;
  }
};
