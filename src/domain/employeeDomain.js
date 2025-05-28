module.exports = {
  formatEmployeeWithRoles(employee) {
    return {
      id: employee.id,
      full_name: employee.full_name,
      nik: employee.nik,
      gender: employee.gender,
      birth_place: employee.birth_place,
      birth_date: employee.birth_date,
      phone: employee.phone,
      province: employee.province,
      city: employee.city,
      district: employee.district,
      subdistrict: employee.subdistrict,
      address: employee.address,
      username: employee.username,
      email: employee.email,
      password: employee.password,
      type: employee.type,
      contract_start: employee.contract_start,
      contract_end: employee.contract_end,
      marital_status: employee.marital_status,
      bpjs_code: employee.bpjs_code,
      status: employee.status,
      photo: employee.photo,
      roles: employee.Roles.map((r) => ({ id: r.id, name: r.name })),
    };
  },
};
