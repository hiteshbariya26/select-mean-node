const allRoles = {
  adminHr: [],
  departmentHead: [],
  interviewer: ['getUsers', 'manageUsers'],
  candidate: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
