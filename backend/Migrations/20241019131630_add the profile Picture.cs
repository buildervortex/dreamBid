using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class addtheprofilePicture : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3429de83-e3f1-4b6a-9f6e-25234bccfd71");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4fe0fe44-9844-465c-b2fa-e92b0a1f0d65");

            migrationBuilder.AddColumn<string>(
                name: "ProfilePicuturePath",
                table: "AspNetUsers",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "40d50bf5-e95e-4509-8820-fa17dddf67b3", null, "Admin", "ADMIN" },
                    { "cd9039f0-8fd3-4e7e-9aa0-f523c7f7046f", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "40d50bf5-e95e-4509-8820-fa17dddf67b3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cd9039f0-8fd3-4e7e-9aa0-f523c7f7046f");

            migrationBuilder.DropColumn(
                name: "ProfilePicuturePath",
                table: "AspNetUsers");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3429de83-e3f1-4b6a-9f6e-25234bccfd71", null, "User", "USER" },
                    { "4fe0fe44-9844-465c-b2fa-e92b0a1f0d65", null, "Admin", "ADMIN" }
                });
        }
    }
}
