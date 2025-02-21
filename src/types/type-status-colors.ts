export const getStatusColorOrder = (
  condition: string,
  prefix: "text" | "bg" = "text"
): string => {
  const colors: Record<string, string> = {
    pending: `statusPending`,
    paid: `statusPaid`,
    canceled: `statusCanceled`,
    delivered: `statusDelivered`,
  };

  return `${prefix}-${colors[condition.toLowerCase()] || "black"}`;
};
