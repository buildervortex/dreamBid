using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class addthecarmodel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "40d50bf5-e95e-4509-8820-fa17dddf67b3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cd9039f0-8fd3-4e7e-9aa0-f523c7f7046f");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4974d81b-8177-44a5-bda0-a13c4c19a8ba", null, "Admin", "ADMIN" },
                    { "49fa7b68-6ff0-40b2-af3c-2e000fed7235", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4974d81b-8177-44a5-bda0-a13c4c19a8ba");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "49fa7b68-6ff0-40b2-af3c-2e000fed7235");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "40d50bf5-e95e-4509-8820-fa17dddf67b3", null, "Admin", "ADMIN" },
                    { "cd9039f0-8fd3-4e7e-9aa0-f523c7f7046f", null, "User", "USER" }
                });
        }
    }
}
