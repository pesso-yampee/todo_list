<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Todo>
 */
class TodoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {   
        $user_id = $this->faker->numberBetween(1, 3);
        return [
            'title' => $user_id . ':' . $this->faker->realText(rand(15, 40)),
            'detail' => $this->faker->realText(rand(15, 40)),
            'user_id' => $this->faker->numberBetween(1,3),
            'created_at' => now(),
        ];
    }
}
