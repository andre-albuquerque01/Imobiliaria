<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('images', function (Blueprint $table) {
            $table->ulid('idImage')->primary();
            $table->string('imageOne');
            $table->string('imageTwo');
            $table->string('imageThree');
            $table->string('imageFour');
            $table->index('house_id');
            $table->foreignUlid('house_id')->constrained("houses", 'idHouse')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('images');
    }
};
