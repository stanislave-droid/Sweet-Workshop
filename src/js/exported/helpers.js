export async function multiApiRequests(...multipleApiArray) {
  const apiRequestsList = multipleApiArray.map(
    async callback => await callback()
  );
  return await Promise.all(apiRequestsList);
}
